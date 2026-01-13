import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users,
  sopEvaluations,
  dimensionScores,
  scoringDimensions,
  InsertSopEvaluation,
  InsertDimensionScore,
  InsertScoringDimension
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============ SOP Evaluation Functions ============

export async function createSopEvaluation(evaluation: InsertSopEvaluation) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(sopEvaluations).values(evaluation);
  return result[0].insertId;
}

export async function updateSopEvaluation(id: number, updates: Partial<InsertSopEvaluation>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(sopEvaluations).set(updates).where(eq(sopEvaluations.id, id));
}

export async function getSopEvaluationById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.select().from(sopEvaluations).where(eq(sopEvaluations.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getUserSopEvaluations(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return await db
    .select()
    .from(sopEvaluations)
    .where(eq(sopEvaluations.userId, userId));
}

export async function getAllSopEvaluations() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return await db
    .select()
    .from(sopEvaluations);
}

// ============ Dimension Score Functions ============

export async function createDimensionScore(score: InsertDimensionScore) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(dimensionScores).values(score);
}

export async function getDimensionScoresByEvaluationId(evaluationId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return await db
    .select()
    .from(dimensionScores)
    .where(eq(dimensionScores.evaluationId, evaluationId));
}

// ============ Scoring Dimension Configuration Functions ============

export async function initializeScoringDimensions(dimensions: InsertScoringDimension[]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Check if dimensions already exist
  const existing = await db.select().from(scoringDimensions).limit(1);
  if (existing.length > 0) {
    return; // Already initialized
  }

  // Insert all dimensions
  for (const dimension of dimensions) {
    await db.insert(scoringDimensions).values(dimension);
  }
}

export async function getScoringDimensions() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return await db
    .select()
    .from(scoringDimensions)
    .where(eq(scoringDimensions.isActive, 1));
}
