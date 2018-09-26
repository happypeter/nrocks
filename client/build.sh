rm -rf dist
yarn build
SSHPASS='xxx' sshpass -e scp -r dist user@host:~/nrocks/next
SSHPASS='xxx' sshpass -e ssh host <<EOF
  cd nrocks
  rm -rf dist
  mv next dist
  exit
EOF
