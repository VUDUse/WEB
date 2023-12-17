<?php
$catSlug = $params['catSlug'];

$query = "SELECT pages.slug, pages.title FROM pages
    LEFT JOIN
        categories ON categories.id=pages.category_id
    WHERE
        categories.slug='$catSlug'";

$res = mysqli_query($link, $query) or die(mysqli_error($link));

$content = '';
while ($row = mysqli_fetch_assoc($res)) {
    $content .= '<div><a href="/page/' . $catSlug . '/' . $row['slug'] . '">' . $row['title'] . '</a></div>';
}

$page = [
    'title' => 'Список всех страниц категории ' . $catSlug,
    'content' => $content
];

return $page;
?>