Tips for helpdesk:
-All the debugger awesomeness.
-Environment issues:
  -Be able to get all env stuff for all sprints running on your local machine.
  Mongo, sql.
  -Have your ow repos up to remind you what you did. Review is ok but not time efficient.

-Above and beyond:
  -FLAG. Improve the wiki.
  -Save useful SO questions for future HD operators!




no /data/db/ folder
also mongod.lock permission.

http://stackoverflow.com/questions/15229412/unable-to-create-open-lock-file-data-mongod-lock-errno13-permission-denied


http://stackoverflow.com/questions/6478113/unable-to-start-mongodb-local-server


sudo chown -R `id -u` /data/db

may also need to kill the mongod process. there's another SO for that...
