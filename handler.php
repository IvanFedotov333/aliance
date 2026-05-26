<?php
$user_name = htmlspecialchars(trim($_POST["username"] ?? ''));
$user_phone = htmlspecialchars(trim($_POST["userphone"] ?? ''));

if (empty($user_name) || empty($user_phone)) {
  echo "Error: Все поля обязательны для заполнения.";
  exit;
}

$token = "8963409453:AAF8DwH27_EiSKGuMaIMXOO-pOPiu1po9Ms";
$chat_id = "-4994603889";

$text = "Новая заявка с сайта!\n";
$text .= "Клиент: " . $user_name . "\n";
$text .= "Телефон: " . $user_phone;

$query = http_build_query([
  'chat_id' => $chat_id,
  'text' => $text,
  'parse_mode' => 'HTML'
]);

$url = "https://api.telegram.org/bot{$token}/sendMessage?{$query}";

$response = file_get_contents($url);

if($response !== false) {
  echo "Success";
} else {
  echo "Error";
}