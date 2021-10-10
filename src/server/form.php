<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));
$name = $data->customerName;
$phone = $data->customerPhone;
$hijack = $data->hijack;

if (isset($hijack) && $hijack == "") {

    $token = "1909682187:AAEaYR3DZYI_dcccHo_9m_gbUSlbYKCArVk";
    $chat_id = "-432901522";

    $message = "Новое сообщение из формы".PHP_EOL;
    $message .= "Имя: " . $name .PHP_EOL;
    $message .= "Телефон:" . $phone .PHP_EOL;

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}", "r");
//    $sendToMail = mail("alohafrombali@gmail.com", "Заявка с сайта", "Имя:" . $name . ". Телефон: " . $phone, "From: alohafrombali@gmail.com \r\n");

    if ($sendToTelegram) {
        echo json_encode($data);
    }
}
