#!/usr/bin/env bash

sftp root@basic-cable.local:/mnt/user/appdata/NginxProxyManager/nginx/default_www/ <<EOF
put -r dist/.
exit
EOF