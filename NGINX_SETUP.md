# Настройка nginx для проекта

## Вариант 1: Полная конфигурация сервера

Используйте файл `nginx.conf` как основу для вашего виртуального хоста.

### Настройки, которые нужно изменить:

1. **server_name** - замените `localhost` на ваш домен
2. **root** - укажите полный путь к папке проекта
3. **fastcgi_pass** - укажите путь к вашему PHP-FPM сокету или адрес

### Примеры fastcgi_pass:
```nginx
# Для сокета (рекомендуется)
fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;

# Для TCP соединения
fastcgi_pass 127.0.0.1:9000;
```

## Вариант 2: Добавление в существующую конфигурацию

Если у вас уже есть настроенный nginx, добавьте блоки из файла `nginx-location-blocks.conf` в ваш server блок.

## Установка и активация

1. Скопируйте конфигурацию в `/etc/nginx/sites-available/`
2. Создайте символическую ссылку в `/etc/nginx/sites-enabled/`
3. Проверьте конфигурацию: `nginx -t`
4. Перезагрузите nginx: `systemctl reload nginx`

### Команды:
```bash
sudo cp nginx.conf /etc/nginx/sites-available/your-project
sudo ln -s /etc/nginx/sites-available/your-project /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Результат

После настройки:
- `/page1` → откроет `page1.php`
- `/page2` → откроет `page2.php`
- `/page3` → откроет `page3.php`
- `/page4` → откроет `page4.php`
- `/` → откроет `page1.php`
- `/page1.php` → редирект на `/page1`

## Проверка

Убедитесь, что:
1. PHP-FPM запущен и работает
2. Права доступа к файлам корректны
3. nginx может читать файлы проекта
4. Логи nginx не показывают ошибок
