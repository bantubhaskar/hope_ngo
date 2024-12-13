from transformers import pipeline

# Configure the API token
api_key = "YOUR_HUGGING_FACE_API_KEY"

# Pass the API key as a Bearer token in the HTTP headers
headers = {"Authorization": f"Bearer {api_key}"}

# Load a specific model from Hugging Face using the API key
# This example demonstrates text generation, but can be adapted for other tasks
generator = pipeline("text-generation", model="gpt2", use_auth_token=True, headers=headers)

result = generator("Once upon a time,")
print(result)
