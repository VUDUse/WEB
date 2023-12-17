<?php
$query = "SELECT slug, title FROM pages";
$res = mysqli_query($link, $query) or die(mysqli_error($link));

$content = '';
while ($row = mysqli_fetch_assoc($res)) {
    $content .= '<div><a href="/page/' . $row['slug'] . '">' . $row['title'] . '</a></div>';
}

$page = [
    'title' => 'Список всех страниц',
    'content' => $content
];

return $page;
?>