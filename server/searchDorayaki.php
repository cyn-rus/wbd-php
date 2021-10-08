<?php
    $dorayaki = $_REQUEST['q'];
    $found = 0;

    if ($dorayaki !== '') {
        $db = new SQLite3('../db/doraemonangis.sq3');
        $sql = "SELECT dorayaki_name, price, description, image FROM dorayakis WHERE dorayaki_name LIKE '%" . $dorayaki . "%'";
        $result = $db->query($sql);
    
        $dorayakis = [];
        while ($row = $result->fetchArray()) {
            $dorayakis[] = [
                'name' => $row['dorayaki_name'],
                'price' => $row['price'],
                'description' => $row['description'],
                'image' => $row['image'],
            ];
        }
    
        echo json_encode($dorayakis);
    }
    echo json_encode([])
?>