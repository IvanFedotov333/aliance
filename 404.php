<?php

include_once('header-page.php'); ?>
<section class="section error">
  <div class="container">
    <div class="section-error-content">
      <svg class="section-error-icon" width="345" height="215">
        <use href="img/sprite.svg#404"></use>
      </svg>
      <h3 class="error-content-title">Страница не найдена</h3>
      <p class="error-content-text">Мы не смогли найти страницу с таким адресом, попробуйте перейти на главную или напишите нам.</p>
      <a href="./index.php" class="error-button">
        Вернуться на главную
      </a>
    </div>
  </div>
</section>
<?php
$cta_exist = 'bg-gray section-cta';
include_once('footer.php'); ?>