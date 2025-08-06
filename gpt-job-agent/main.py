import os
import time
from openai import OpenAI
from dotenv import load_dotenv
from linkedin_agent import login_to_linkedin, search_jobs, apply_to_job
from playwright.sync_api import sync_playwright

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def is_job_a_match(job_desc, resume_text):
    prompt = f"""
    Does the following job description match the candidate's resume?

    Resume: {resume_text}

    Job Description: {job_desc}

    Answer with "Yes" or "No" and explain briefly.
    """
    response = client.chat.completions.create(
        messages=[{"role": "user", "content": prompt}],
        model="gpt-4",
    )
    return response.choices[0].message.content

def run_job_agent():
    with open("resume.txt", "r") as f:
        resume_text = f.read()

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        login_to_linkedin(page)
        jobs = search_jobs(page)

        for link in jobs[:5]:  # try 5 jobs at a time
            page.goto(link)
            time.sleep(2)
            job_desc = page.inner_text("section")
            gpt_result = is_job_a_match(job_desc, resume_text)
            print(f"GPT says: {gpt_result}")

            if "Yes" in gpt_result:
                success = apply_to_job(page, link)
                if success:
                    with open("job_log.csv", "a") as log:
                        log.write(f"{link}\n")

        browser.close()

if __name__ == "__main__":
    run_job_agent()
