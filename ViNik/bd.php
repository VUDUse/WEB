<?php
$host = '127.0.0.1:3306';
$user = 'root';
$pass = '';
$db = 'Cookie';

try
{
    $conn = new PDO("mysql:host=$host; dbname=$db", $user, $pass);

    $conn -> setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * FROM New";

    $result = $conn -> query($sql);

    if($result -> rowCount() > 0)
    {
        while($row = $result -> fetch(PDO::FETCH_ASSOC))
        {
            echo "<tr>";
            echo "<td>". $row["id"]. "</td>";
            echo "<td>". $row["title"]. "</td>";
            echo "<td>". $row["conent"]. "</td>";
            echo "</tr>";
        }
    }
    else
    {
        echo "<tr><td colspan='3'> 0 результатов</td></tr>";
    }
}
catch(PDOException $e)
{
    echo "Ошибка подключения: ". $e ->getMessage();
}

$conn = null;
?>