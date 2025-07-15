# 🎙️ Podcast Discovery App

> Inspired by this YouTube video: [https://youtu.be/9RUhp99J87c?si=bkGzkix4QVdSKiqV](https://youtu.be/9RUhp99J87c?si=bkGzkix4QVdSKiqV)

> A full-stack Reflex web application deployed to Kubernetes.

> Modified and maintained by [KubeSkills](https://kubeskills.com) to demonstrate secure, scalable, Python-native app delivery to [Kubernetes](https://kubernetes.io).

---

## 📦 Project Structure

```bash
reflex-app/
├── backend/          # Reflex backend app (FastAPI + WebSockets)
│   ├── podcast_discovery/
│   ├── rxconfig.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/         # Static NGINX site (compiled Reflex frontend)
│   ├── out/
│   └── Dockerfile
├── k8s-manifests/       # Kubernetes manifests
│   ├── backend/
│   ├── frontend/
│   ├── hpa/
│   ├── ingress/
│   ├── namespace/
│   └── redis/
````

---

## 🚀 App Overview

| Component  | Description                           | Container Image                      |
| ---------- | ------------------------------------- | ------------------------------------ |
| `frontend` | Static Reflex export served via NGINX | `kubeskills/podcast-frontend:latest` |
| `backend`  | FastAPI + WebSocket Reflex backend    | `kubeskills/podcast-backend:latest`  |
| `redis`    | Session storage backend               | `redis:6.2-alpine` (default)         |

---

## ⚙️ Local Development

### 1. Setup Python environment (backend)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install reflex==0.8.2
reflex run
```

### 2. Export frontend

```bash
reflex export --no-zip
cp -r .web/build/client ../frontend/out
```

### 3. Run frontend locally

```bash
cd ../frontend
docker build -t local/reflex-frontend .
docker run -p 8080:80 local/reflex-frontend
```

---

## ☸️ Kubernetes Deployment

### 2. Deploy with Manifests

```bash
kubectl apply -f k8s-manifests/namespace
kubectl apply -f k8s-manifests/redis
kubectl apply -f k8s-manifests/backend
kubectl apply -f k8s-manifests/frontend
kubectl apply -f k8s-manifests/hpa
kubectl apply -f k8s-manifests/ingress
```

---

## 🔐 Production Features

✅ Traefik-compatible Ingress with cert-manager TLS  
✅ Redis session persistence  
✅ Horizontal Pod Autoscaler (backend)  
✅ Pod anti-affinity rules  
✅ Resource requests and limits (frontend, backend, Redis)  

---

## 🧱 Built With

* [Reflex](https://reflex.dev) — Python-native frontend framework
* [FastAPI](https://fastapi.tiangolo.com) — async backend
* [NGINX](https://nginx.org/en/) — static site server
* [Redis](https://redis.io) — session state backend
* [Kubernetes](https://kubernetes.io) + Helm — production deployment
* [cert-manager](https://cert-manager.io) — TLS automation
* [Traefik](https://traefik.io) — ingress controller

---

## 📝 License

Apache 2.0 — [LICENSE](./LICENSE)

---

## 🔗 Container Images

* [`kubeskills/reflex-frontend`](https://hub.docker.com/r/kubeskills/reflex-frontend)
* [`kubeskills/reflex-backend`](https://hub.docker.com/r/kubeskills/reflex-backend)

---

## 🙋‍♂️ Maintainers

Brought to you by [KubeSkills](https://kubeskills.com) — helping developers level up in cloud-native technologies.
