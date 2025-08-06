from playwright.sync_api import sync_playwright
import time
from dotenv import load_dotenv
import os

load_dotenv()
EMAIL = os.getenv("LINKEDIN_EMAIL")
PASSWORD = os.getenv("LINKEDIN_PASSWORD")

def login_to_linkedin(page):
    page.goto("https://www.linkedin.com/login")
    page.fill("input#username", EMAIL)
    page.fill("input#password", PASSWORD)
    page.click("button[type='submit']")
    time.sleep(3)  # let it load

def search_jobs(page, keyword="Operations Manager", location="Remote"):
    url = f"https://www.linkedin.com/jobs/search/?keywords={keyword}&location={location}&f_AL=true"
    page.goto(url)
    time.sleep(3)
    jobs = page.query_selector_all("ul.jobs-search__results-list li")
    links = [job.query_selector("a").get_attribute("href") for job in jobs if job.query_selector("a")]
    return links

def apply_to_job(page, job_url):
    page.goto(job_url)
    time.sleep(2)
    try:
        apply_btn = page.locator("button:has-text('Easy Apply')")
        if apply_btn:
            apply_btn.click()
            time.sleep(2)
            # Fill in form if needed
            # Upload resume (optional)
            submit_btn = page.locator("button:has-text('Submit application')")
            if submit_btn:
                submit_btn.click()
                print("✅ Applied:", job_url)
                return True
    except Exception:
        pass
    return False
