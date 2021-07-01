# Git help

### Создать пустой git репозиторий (делается один раз, при создании)

`$ git init`

### Возможно потребуется настройка Git:

`$ git config --global user.name "John Doe" `
`$ git config --global user.email johndoe@example.com`

### Сначала надо проиндексировать
`$ git add .`

### Проверить статус файлов для Git:
`$ git status`

### Сохранить заиндексированный код в истории версий кода Git (репозиторий):

`$ git commit -m "Commit's name"`

### Комбинация git add .  и git commit -m "Commit name"

`$ git commit -am "Commit name"`

### Просмотр истории версий кода:
`$ git log`

### Добавить удаленный репозиторий:
`$ git remote add origin https://github.com/testovaask5/css_intro.git `

### Отправляем в удаленный репозиторий:
`$ git push origin master`

## Работа с ветвями

### Создать ветвь:

` $ git branch  new-branch `

### Переключится на новую ветвь:

` $ git checkout new-branch`

### ПВносим изменения и делаем commit:

`$ git commit -m "Commit's name"`

### Переходим обратно в главную ветвь :

` $ git checkout master`

### Вносим изменения и делаем commit (необязательно):

`$ git commit -m "Commit's name"`

### Делаем слияние ветвей (нужно находится в ветке в которую вливаем (мастер `$ git status`)):

` $  git merge new-branch`

### В случае уонфликтов редактируем файлы и делаем индексацию файлов и commit :
`$ git commit -m "Commit's name"`

