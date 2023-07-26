# simple-server
1
2
3
4
7
tetsjhkqwdq
last try
bj

let your cluster talk to AR
=> gcloud auth login
=> gcloud auth activate-service-account 1040866274939-compute@developer.gserviceaccount.com --key-file=/Users/ravishgoel/Dev/key.json
=> gcloud auth configure-docker europe-central2-docker.pkg.dev
=> gcloud auth print-access-token | docker login -u oauth2accesstoken --password-stdin https://europe-central2-docker.pkg.dev (the token is valid for 60 minutes)


docker build -t europe-central2-docker.pkg.dev/mandalorian-394005/obiwan/micro:test -f Dockerfile .
docker push europe-central2-docker.pkg.dev/mandalorian-394005/obiwan/micro:test
docker pull us-central1-docker.pkg.dev/mandalorian-394005/obiwan/micro:test



