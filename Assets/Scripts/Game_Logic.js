#pragma strict

var maincam : Camera;
var move;
var rotate;
var target = Quaternion.Euler (53, 0, 0);

function Start () 
{
	maincam = Camera.main;

}

function Update () {
	if (Input.GetKeyDown("space")) 
	{
	move = true;
	rotate = true;
	}
	
	//move
	if (move == true)
	{
	maincam.transform.Translate((new Vector3(0, 1, 1) * Time.deltaTime),Space.World);
	}
	if(rotate == true)
	{
	maincam.transform.Rotate(Vector3.right * (Time.deltaTime * 18.5)); 
	}
	
	//move check
	if (maincam.transform.position.y > 2.88)
	{
	move = false;
	}
	if (maincam.transform.eulerAngles.x > 55.85)
	{
	rotate = false;
	}
	
}

//var target = Quaternion.Euler (53.5, 0, 0);
//	maincam.transform.Translate(new Vector3(0, 2.8, 2.5));