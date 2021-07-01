# Bash мануал

### Создание папки:

`$ mkdir namedir`

### Перейти в папку (по относительному пути):

`$ cd namedir`

### Полный (абсолютный) путь к файлу

`$ pwd`

### Создать фаил:

`touch test.js`

### Переименовать фаил:

`$ mv test.js script.js`

### Переместить фаил в папку выше:

`$ mv script.js ../somedir/main.js`

### Удалить фаил (сначала надо создать):

```shell
$ touch style.css
$ rm style.css
```

### Перейти на уровень выше:

`$ cd ..`

### Удалить папку:

`$ rm -rf namedir`

### Посмотреть файлы в папке:

`$ ls`

### Посмотреть все файлы (и скрытые) в папке:

`$ ls -la`

### Создать папку и войти внее (выполнить несколько команд подряд):

`$ mkdir assets && cd assets`