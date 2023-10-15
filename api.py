import flask
import openai
from flask import jsonify, Flask, request

app = Flask(__name__)

@app.route("/chat", methods=["post"])
def chat():
    context = request.json.get("data")

    
    openai.api_key = "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"
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=context
    )
    context.append(response["choices"][0]["message"])
    return context, 200


app.run(host="0.0.0.0", debug = True)