<<<<<<< HEAD
<?php
require 'vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable( __DIR__ );
$dotenv->load();

=======
<?php
require 'vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable( __DIR__ );
$dotenv->load();

>>>>>>> e5cc454edf8ece10371a8aa2c2142769c5584654
$objDatabaseConnection = ( new Src\System\DatabaseConnector() )->getConnection();