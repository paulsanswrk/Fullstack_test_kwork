<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мой Шаблон Страницы</title>
    <?php if (!isset($_GET['simple']) || $_GET['simple'] != '1'): ?>
    <link rel="stylesheet" href="/assets/css/styles.css"> <!-- Подключи свой CSS-файл -->
    <script src="/assets/js/axnikitaJS.js"></script>
    <?php endif; ?>
</head>