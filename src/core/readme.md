## 1. Run docker container

    docker-compose up --build --force-recreate

## 2. View Docker status

    docker container ls -a

## 3. SSH to docker

    docker exec -it core_app_1 /bin/bash
    # run some script
    python --version

    cd /src
    python ./face_dataset.py
    python ./face_training.py
    python ./face_recognition.py

