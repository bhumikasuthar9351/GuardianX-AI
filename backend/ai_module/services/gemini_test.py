from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client()

prompt = """
You are GuardianX AI.

Analyze this emergency:

My friend fainted and is not responding.

Provide:
1. Emergency Level
2. Immediate Actions
3. Risks
4. Safety Advice
"""

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt
)

print(response.text)