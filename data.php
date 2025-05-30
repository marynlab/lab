<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Масив імен для випадкового вибору
$names = ["Олена", "Іван", "Марія", "Андрій", "Світлана", "Богдан", "Ірина"];

// Отримуємо параметр count, по дефолту 1, максимум 5
$count = isset($_GET['count']) ? intval($_GET['count']) : 1;
if ($count < 1) $count = 1;
if ($count > 5) $count = 5;

$data = [];

for ($i = 0; $i < $count; $i++) {
    $id = rand(1000, 9999);
    $name = $names[array_rand($names)];
    // Формат дати: YYYY-MM-DD HH:MM:SS
    $date = date('Y-m-d H:i:s', time() - rand(0, 86400));

    $data[] = [
        'id' => $id,
        'name' => $name,
        'date' => $date
    ];
}

echo json_encode([
    'count' => $count,
    'data' => $data
]);
?>
