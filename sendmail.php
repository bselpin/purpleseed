<?
function message($message)
{
echo "
<script>
window.alert(\"$message\");
history.go(-1);
</script>
";

}
 
$name = $_POST['name'];
$corporation = $_POST['corporation'];
$hp = $_POST['hp'];
$frommail = $_POST['frommail'];
$subject = $_POST['subject'];
$subject2 = "$name \r $hp \r $frommail \r $subject";

if(!$name)message("이름을 입력하세요");
if(!$corporation)message("기업/기관명을 적으세요");
if(!$hp)message("연락처를 적으세요");
if(!$frommail)message("메일을 적으세요");
if(!$subject)message("내용을 적으세요");
 
$tomail = "purpleseed@purpleseed.co.kr" ;
 
/* mail()함수에서 쓰게될 변수 */
 

 
/* 줄의 끝에 붙어 있는 슬래쉬를 제거하는 함수 */
 
$subject=stripslashes($subject);
 
 
/* 메일을 보내주는 함수 */
 
mail($tomail, $subject, $subject2);
 
echo "편지가 발송되었습니다.";
 
?>