<?php
 session_start(); 


    $servername     = 'localhost';
    $user           = 'root';
    $password       = 'root';
    $db             = 'mywebcreationsdb';
    $port           = 8889;


    // Create connection
    $conn = new mysqli($servername, $user, $password, $db);

    if ($conn->connect_error) {
      //die("Connection failed: " . $conn->connect_error);
    }else{
      $data               = file_get_contents("php://input");
      $dataJsonDecode     = json_decode($data);
      $method             = $_SERVER['REQUEST_METHOD'];
      if ($dataJsonDecode) {
        $homePageDataId     = $dataJsonDecode->homePageDataId;
        $eventHeader1       = $dataJsonDecode->eventHeader1;
        $eventSection1      = $dataJsonDecode->eventSection1;
        $eventHeader2       = $dataJsonDecode->eventHeader2;
        $eventSection2      = $dataJsonDecode->eventSection2;
        $eventHeader3       = $dataJsonDecode->eventHeader3;
        $eventSection3      = $dataJsonDecode->eventSection3;
        $eventHeader4       = $dataJsonDecode->eventHeader4;
        $eventSection4      = $dataJsonDecode->eventSection4;
        $eventHeader5       = $dataJsonDecode->eventHeader5;
        $eventSection5      = $dataJsonDecode->eventSection5;
        $serviceHeader1     = $dataJsonDecode->serviceHeader1;
        $serviceSection1    = $dataJsonDecode->serviceSection1;
        $serviceHeader2     = $dataJsonDecode->serviceHeader2;
        $serviceSection2    = $dataJsonDecode->serviceSection2;
        $serviceHeader3     = $dataJsonDecode->serviceHeader3;
        $serviceSection3    = $dataJsonDecode->serviceSection3;
        $serviceHeader4     = $dataJsonDecode->serviceHeader4;
        $serviceSection4    = $dataJsonDecode->serviceSection4;
        $serviceHeader5     = $dataJsonDecode->serviceHeader5;
        $serviceSection5    = $dataJsonDecode->serviceSection5;
        $marqueeMessage     = htmlspecialchars($dataJsonDecode->marqueeMessage, ENT_QUOTES);
        $marqueeExpiry      = $dataJsonDecode->marqueeExpiry;
        $token              = $dataJsonDecode->token;
      }
      //htmlspecialchars($str, ENT_QUOTES); 
      if(!empty($_GET["functionName"])){
          $functionName        = $_GET["functionName"];
      }

      // create SQL based on HTTP method
      switch ($method) {
        case 'GET':
          $query              = "SELECT * FROM manageHomePage"; 
          $result = mysqli_query($conn, $query);

          break;
        case 'PUT':
          $query              = "UPDATE manageHomePage SET eventHeader1='$eventHeader1', eventSection1='$eventSection1', 
          eventHeader2='$eventHeader2', eventSection2='$eventSection2', eventHeader3='$eventHeader3', eventSection3='$eventSection3',  
          eventHeader4='$eventHeader4', eventSection4='$eventSection4', eventHeader5='$eventHeader5', eventSection5='$eventSection5', 
          serviceHeader1='$serviceHeader1', serviceSection1='$serviceSection1', serviceHeader2='$serviceHeader2', serviceSection2='$serviceSection2', 
          serviceHeader3='$serviceHeader3', serviceSection3='$serviceSection3', serviceHeader4='$serviceHeader4', serviceSection4='$serviceSection4',
          serviceHeader5='$serviceHeader5', serviceSection5='$serviceSection5', marqueeMessage = '$marqueeMessage' WHERE homePageDataId = 2;";
          
          if($token == $_SESSION['token']){
            $result = mysqli_query($conn, $query);
          }
          
          break;
      }

      // excecute SQL statement
      //$result = mysqli_query($conn, $query);

      if (!$result) {
        http_response_code(404);
        die(mysqli_error());
      }else{
        switch ($method) {
          case 'GET':
            $arr    = array();
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    $arr[] = $row;
                }
                echo $json_info = json_encode($arr);
            } else {
                echo "No Result - " . $result->num_rows;
            }
            break;

          case 'PUT':
                  echo "Udated Homepage data";
            break;
        }
      }
    }
    // close mysql connection
    $conn->close();
?>