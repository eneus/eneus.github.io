---
title: "Drupal8 - Unable to determine class for field..."
date: 2018-07-13T12:52:36+06:00
type: "blog"
tags: ["drupal", "field", "drush", "MySQL"]
image: images/backgrounds/21.jpg
description : "This is meta description"
---
One possible way is that your module is missing from the codebase or has been improperly uninstalled and you've still a field which is using that missing module.

Try the following drush commands to remove the broken field:

```bash
drush sqlq "DELETE FROM cache_config"
drush sqlq "DELETE FROM config WHERE name = 'field.storage.xxx.xxx' OR data LIKE '%field.storage.xxx.xxx%'"
drush sqlq "DELETE FROM config_snapshot  WHERE name = 'field.storage.xxx.xxx' OR data LIKE '%field.storage.xxx.xxx%'"
```

**Warning:** Don't execute above commands on master/live database. Make a backup before doing any database changes.

Where field.storage.xxx.xxx is your reported field storage type (e.g. field.storage.node.webform).

If above won't help, check any other references by:
```bash
drush sql-dump --ordered-dump | grep field.storage.xxx.xxx
```

At the end you need to rebuild your caches:

```bash
drush cr
```