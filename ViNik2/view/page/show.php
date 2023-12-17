<?php
$catSlug = $params['catSlug'];
$pageSlug = $params['pageSlug'];

$query = "SELECT pages.title, pages.content 
    FROM pages
    LEFT JOIN
        categories ON categories.id=pages.category_id
    WHERE
        pages.slug='$pageSlug' AND categories.slug='$catSlug'";

$res = mysqli_query($link, $query) or die(mysqli_error($link));
$page = mysqli_fetch_assoc($res);

return $page;
?>