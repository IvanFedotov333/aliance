<!doctype html>
<html lang="ru">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Предзагрузка локальных шрифтов (оставь как есть, это правильно) -->
  <link rel="preload" href="/fonts/notosans-cyrillic-400.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/notosans-latin-400.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/notosans-cyrillic-600.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/notosans-latin-600.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/notosans-cyrillic-700.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/notosans-latin-700.woff2" as="font" type="font/woff2" crossorigin>

  <!-- Асинхронная загрузка CSS (не блокирует рендер) -->
  <link rel="preload" href="css/normalize.css" as="style" onload="this.onload=null; this.rel='stylesheet'">
  <link rel="preload" href="css/swiper-bundle.min.css" as="style" onload="this.onload=null; this.rel='stylesheet'">
  <link rel="preload" href="css/style.css" as="style" onload="this.onload=null; this.rel='stylesheet'">
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <!-- Резерв для браузеров без JavaScript -->
  <noscript>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/swiper-bundle.min.css">
    <link rel="stylesheet" href="css/style.css">
  </noscript>
  <title>Aliance Production</title>
</head>

<body class="front-page">
  <div class="mobile-menu">
    <ul class="mobile-menu-nav">
      <li class="mobile-menu-item">
        <a href="./about.php" class="mobile-menu-link">О компании</a>
      </li>
      <li class="mobile-menu-item">
        <a href="./contract.php" class="mobile-menu-link">Контрактное производство</a>
        <ul class="mobile-submenu">
          <li class="mobile-submenu-item">
            <a href="./carchem.php" class="mobile-submenu-link">Автомобильная химия</a>
          </li>
          <li class="mobile-submenu-item">
            <a href="" class="mobile-submenu-link">Бытовая химия</a>
          </li>
          <li class="mobile-submenu-item">
            <a href="" class="mobile-submenu-link">Дезинфицирующие средства</a>
          </li>
          <li class="mobile-submenu-item">
            <a href="" class="mobile-submenu-link">Пищевые аэрозоли</a>
          </li>
          <li class="mobile-submenu-item">
            <a href="" class="mobile-submenu-link">Косметическая продукция</a>
          </li>
          <li class="mobile-submenu-item">
            <a href="" class="mobile-submenu-link">Краски аэрозольные</a>
          </li>
        </ul>
      </li>
      <li class="mobile-menu-item">
        <a href="./trademarks.php" class="mobile-menu-link">Собственные торговые марки</a>
        <ul class="mobile-submenu">
          <li class="mobile-submenu-item">
            <a href="./carchem-ag-tech.php" class="mobile-submenu-link">Автохимия AG-Tech</a>
          </li>
          <li class="mobile-submenu-item">
            <a href="#" class="mobile-submenu-link">Автохимия AP</a>
          </li>
        </ul>
      </li>
      <li class="mobile-menu-item">
        <a href="#" class="mobile-menu-link">Новости</a>
      </li>
      <li class="mobile-menu-item">
        <a href="./contact.php" class="mobile-menu-link">Контакты</a>
      </li>
    </ul>
    <a href="tel:+74996861014" class="mobile-phone">+7 (499) 686-10-14</a>
    <div class="mobile-info">
      <svg class="phone-icon" width="24" height="24">
        <use href="img/sprite.svg#Location"></use>
      </svg>
      <address class="mobile-info-address">
        г. Москва, Холодильный пер. 4к1с8
      </address>
    </div>
    <div class="mobile-info">
      <svg class="phone-icon" width="24" height="24">
        <use href="img/sprite.svg#Mail"></use>
      </svg>
      <a href="mailto:a.dragunov@tdaliance.ru" class="mobile-info-email">
        a.dragunov@tdaliance.ru
      </a>
    </div>
    <div class="mobile-socials">
      <svg class="VK-icon" width="24" height="24">
        <use href="img/sprite.svg#VK"></use>
      </svg>
      <svg class="Inst-icon" width="24" height="24">
        <use href="img/sprite.svg#Inst"></use>
      </svg>
    </div>
    <!-- /.mobile-info -->
  </div>
  <nav class="navbar">
    <a href="#" class="mobile-menu-toggle">
      <div class="mobile-menu-line"></div>
      <div class="mobile-menu-line"></div>
      <div class="mobile-menu-line"></div>
    </a>
    <a class="header-logo" href="./">
      <svg class="logo-svg logo-light" width="110" height="44">
        <use href="img/sprite.svg#logo-light"></use>
      </svg>
      <svg class="logo-svg logo-dark" width="110" height="44">
        <use href="img/sprite.svg#logo"></use>
      </svg>
    </a>
    <ul class="header-nav">
      <li class="header-nav-item">
        <a href="./about.php" class="header-nav-link">О компании</a>
      </li>
      <li class="header-nav-item">
        <a href="./contract.php" class="header-nav-link">Контрактное производство</a>
      </li>
      <li class="header-nav-item">
        <a href="./trademarks.php" class="header-nav-link">Собственные торговые марки</a>
      </li>
      <li class="header-nav-item">
        <a href="#" class="header-nav-link">Новости</a>
      </li>
      <li class="header-nav-item">
        <a href="./contact.php" class="header-nav-link">Контакты</a>
      </li>
    </ul>
    <div class="header-phone">
      <svg class="phone-icon" width="20" height="20">
        <use href="img/sprite.svg#phone"></use>
      </svg>
      <a href="tel:+74996861014" class="header-phone-link">+7 (499) 686-10-14
      </a>
    </div>
    <!-- /.header-phone -->
    <button class="navbar-button button" data-toggle="modal" data-target="#feedback-modal">
      <svg class="button-icon" width="20" height="20">
        <use href="img/sprite.svg#phone"></use>
      </svg>
      <div class="button-text">Получить консультацию</div>
    </button>
  </nav>
  <!-- /.navbar -->
  <header class="header header-image">
    <div class="container">
      <div class="header-content">
        <div class="separator"></div>
        <h1 class="header-title">
          <?php echo "Комплексное обеспечение товарами и расходными материалами бизнеса"; ?>
        </h1>
        <p class="header-text">
          Высокий уровень вовлечения представителей целевой аудитории является
          четким доказательством простого факта: высококачественный прототип
          будущего проекта напрямую зависит от анализа существующих паттернов
          поведения.
        </p>
        <button class="button header-button" data-toggle="modal" data-target="#feedback-modal">
          Подробнее о компании
        </button>
      </div>
      <!-- /.header-content -->

      <!-- Основной блок слайдера -->
      <?php include_once('./templates/features-slider-block.php'); ?>
    </div>
    <!-- /.container -->
  </header>
  <?php include_once('./templates/steps-block.php'); ?>
  <?php $block_title = 'Контрактное производство';
  include_once('./templates/contract-block.php') ?>
  <?php $block_title = 'Собственные торговые марки';
  include_once('./templates/trademark-block.php') ?>
  <?php include_once('./templates/founder-block.php'); ?>
  <?php include_once('./templates/clients-block.php'); ?>
  <section class="section blog">
    <div class="container">
      <div class="separator"></div>
      <h2 class="section-title">Блог экспертов в области производства</h2>
      <?php include_once('./templates/blog-slider-block.php'); ?>
    </div>
  </section>
  <?php include_once('footer.php'); ?>