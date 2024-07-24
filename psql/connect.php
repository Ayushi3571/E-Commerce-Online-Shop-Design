<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection parameters
$host = "localhost";
$dbname = "online_shop";
$user = "admin";
$password = "test";
$port = "5432"; // Default PostgreSQL port

// Connection string (DSN)
$conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password";

// Establish the connection
$dbconn = pg_connect($conn_string);

if (!$dbconn) {
    die("Error in connection: " . pg_last_error($dbconn));
}

// Query to fetch all entries from the table
$query = "SELECT * FROM products";

// Execute the query
$result = pg_query($dbconn, $query);

if (!$result) {
    die("Error in SQL query: " . pg_last_error($dbconn));
}

// Fetch all rows as an associative array
$rows = pg_fetch_all($result);

// Display the results
if ($rows) {
    foreach ($rows as $row) {
        echo "<pre>";
        print_r($row);
        echo "</pre>";
    }
} else {
    echo "No records found.";
}

// Free result and close the connection
pg_free_result($result);
pg_close($dbconn);
?>
