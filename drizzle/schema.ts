import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * SOP Evaluations table - stores metadata and overall results
 */
export const sopEvaluations = mysqlTable("sop_evaluations", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  
  // SOP Metadata
  sopTitle: varchar("sopTitle", { length: 500 }).notNull(),
  facility: varchar("facility", { length: 255 }),
  systemOrProcess: varchar("systemOrProcess", { length: 255 }),
  revision: varchar("revision", { length: 100 }),
  effectiveDate: timestamp("effectiveDate"),
  reviewerName: varchar("reviewerName", { length: 255 }),
  reviewDate: timestamp("reviewDate"),
  
  // File information
  fileUrl: text("fileUrl"),
  fileKey: text("fileKey"),
  fileName: varchar("fileName", { length: 500 }),
  fileType: varchar("fileType", { length: 50 }),
  sopContent: text("sopContent"), // Extracted text content
  
  // Overall scoring results
  overallScore: decimal("overallScore", { precision: 3, scale: 2 }), // 0.00 to 5.00
  maturityLevel: varchar("maturityLevel", { length: 50 }), // "Level 1 – Informal", etc.
  maturityLevelNumeric: int("maturityLevelNumeric"), // 1-5 for easy querying
  
  // Approval status
  approvalStatus: mysqlEnum("approvalStatus", ["approved", "approved_with_conditions", "not_approved"]),
  safetyGateFlagged: int("safetyGateFlagged").default(0).notNull(), // 1 if flagged, 0 otherwise
  
  // Executive summary
  executiveSummary: text("executiveSummary"),
  
  // Status
  status: mysqlEnum("status", ["pending", "processing", "completed", "failed"]).default("pending").notNull(),
  errorMessage: text("errorMessage"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SopEvaluation = typeof sopEvaluations.$inferSelect;
export type InsertSopEvaluation = typeof sopEvaluations.$inferInsert;

/**
 * Dimension Scores table - stores detailed scoring for each of the 9 dimensions
 */
export const dimensionScores = mysqlTable("dimension_scores", {
  id: int("id").autoincrement().primaryKey(),
  evaluationId: int("evaluationId").notNull(),
  
  // Dimension identification
  dimensionName: varchar("dimensionName", { length: 255 }).notNull(),
  dimensionWeight: decimal("dimensionWeight", { precision: 5, scale: 2 }).notNull(), // e.g., 15.00 for 15%
  
  // Scoring
  score: decimal("score", { precision: 3, scale: 2 }).notNull(), // 0.00 to 5.00
  weightedScore: decimal("weightedScore", { precision: 5, scale: 4 }).notNull(), // score * (weight/100)
  
  // Maturity definition for this score
  maturityDefinition: text("maturityDefinition"),
  
  // AI-generated analysis
  justification: text("justification"), // Why this score was assigned
  gapsIdentified: text("gapsIdentified"), // What is missing
  improvementRecommendations: text("improvementRecommendations"), // What would move it to next level
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DimensionScore = typeof dimensionScores.$inferSelect;
export type InsertDimensionScore = typeof dimensionScores.$inferInsert;

/**
 * Scoring Configuration - stores the 9 dimensions with weights and maturity definitions
 * This allows for future configurability without code changes
 */
export const scoringDimensions = mysqlTable("scoring_dimensions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull().unique(),
  weight: decimal("weight", { precision: 5, scale: 2 }).notNull(), // Percentage weight
  description: text("description"),
  
  // Maturity definitions for each level (0-5)
  maturityDefinitions: json("maturityDefinitions").$type<{
    level0: string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  }>().notNull(),
  
  // Evaluation criteria for LLM
  evaluationCriteria: text("evaluationCriteria"),
  
  displayOrder: int("displayOrder").notNull(),
  isActive: int("isActive").default(1).notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ScoringDimension = typeof scoringDimensions.$inferSelect;
export type InsertScoringDimension = typeof scoringDimensions.$inferInsert;