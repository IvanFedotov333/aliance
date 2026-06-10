<?php
$page_title = 'Автомобильная химия';
$background_style = 'bg-gray header-with-image';
include_once('header-page.php'); ?>
<?php include_once('./templates/carchem-prod-block.php'); ?>
<div class="container">
  <?php
  $slider_mode = 'slider-darkmode';
  $slider_buttons_mode = 'slider-buttons-lightmode';
  include_once('./templates/features-slider-block.php'); ?>
</div>
<?php include_once('./templates/carchem-prep-block.php'); ?>
<?php include_once('./templates/carchem-types-block.php'); ?>
<?php include_once('./templates/research-block.php'); ?>
<?php include_once('./templates/steps-block.php'); ?>
<?php include_once('./templates/clients-block.php'); ?>
<?php include_once('footer.php'); ?>