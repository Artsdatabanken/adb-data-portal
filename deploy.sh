#!/bin/bash
echo Making archive...
tar -czf data-portal.tar.gz public/*.html deploy-www.js
ls -la data-portal.tar.gz
echo Deploying...
sshpass -p $scp_pass scp -o StrictHostKeyChecking=no data-portal.tar.gz $scp_user@158.38.128.51:/tmp
curl -X POST --data-urlencode "payload={\"channel\": \"$slack_chan\", \"username\": \"travis not the band\", \"text\": \"$slack_command\", \"icon_emoji\": \":ghost:\"}" https://hooks.slack.com/services/$SLACK_TOKEN