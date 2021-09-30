import  requests
# import time

# À partir da décima requisição somos bloqueados de acessar o recurso
# Código de status 429: Too Many Requests

# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
#     print(response.status_code)
#     # time.sleep(6)

# Coloca uma pausa de 6 segundos a cada requisição
# Obs: este site de exemplo tem um rate limit de 10 requisições por minuto

# import requests
# Por 10 segundos não temos certeza se a requisição irá retornar
# try:
      # recurso demora muito a responder
#     response = requests.get("http://httpbin.org/delay/10", timeout=2)
# except requests.Timeout:
      # vamos fazer uma nova requisição
#     response = requests.get("http://httpbin.org/delay/10", timeout=15)
# finally:
#     print(response.status_code)
