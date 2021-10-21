package test;
import javax.swing.JOptionPane;
import java.security.SecureRandom;


public class Test {
		
		String prompt;
		String answer;
		
		//constructor
		public Test() {};
		
		//constructor with two arguments
		public Test(String prompt, String answer)
		{
			this.prompt = prompt;
			this.answer = answer;
		}
		
		//first method with details of questions
		public void simulateQuestion()
		{
					
			String que1 = ("Non-static methods are also called as: \n"
					+ "(a) static methods \n"
					+ "(b) Instance methods \n "
					+ "(c) Overloaded methods \n "
					+ "(d) None of the above \n ");		
					
					
			
			String que2 = ("For any given array with 5 elements {1,2,3,4,5}, what is the index number of third element? \n"
					+ "(a) 1 \n"
					+ "(b) 2 \n "
					+ "(c) 3 \n "
					+ "(d) 4 \n ");
			
			String que3 = (" What type of argument promotion is allowed for 'int'? \n"
					+ "(a) long \n"
					+ "(b) double \n "
					+ "(c) float \n "
					+ "(d) all of the above \n ");
			
			String que4 = (" Which of the following is NOT distinguished by the compiler for overloaded methods by their signatures? \n"
					+ "(a) number \n"
					+ "(b) parameter types \n "
					+ "(c) return type \n "
					+ "(d) order \n ");
			
			String que5 = (" If a local variable or parameter in a method has the same name as a field of the class, the field is hidden \r\n"
					+ "until the block terminates execution. \r\n"
					+ "This phenomenon is termed as \n"
					+ "(a) shadowing \n"
					+ "(b) clouding \n "
					+ "(c) buffering \n "
					+ "(d) shadowcasting \n ");
			
			//array of questions along with correct answers
			Test[] questions = {
					new Test(que1, "b"),
					new Test(que2, "b"),
					new Test(que3, "d"),
					new Test(que4, "c"),
					new Test(que5, "a")
			};	
			
			//calling method checkAnswer
			checkAnswer(questions);		
        }		
		
        //second method to check score
		public void checkAnswer(Test[] questions)
		{
					int score=0 ;
					
					
					for (int i = 0; i < questions.length; i++)
					{
						
						String a = JOptionPane.showInputDialog(null,questions[i].prompt);
						
						if( a.equals(questions[i].answer))
						{	
							generateMessage(true);
							score++;
						}
						else
						{
							generateMessage(false);
						}				
					}		
					
					JOptionPane.showMessageDialog(null,"correct answers: " + score 
							                            + ",\n \nIncorrect answers: "
							                            + (questions.length - score)
							                            + "\n\nTotal Percentage Scored: "
							                            + ((score * 100 )/ 5) + "%\n"
							                            );
					
					JOptionPane.showMessageDialog(null, "Thank you! Have a great day!");
					
				}

		
			//third method to generate random message
			public void generateMessage(boolean b)
			{		
				SecureRandom rand = new SecureRandom();
			
				if (b == true) 
				{					
					switch ( rand.nextInt( 4 ) )
					{
					case 1:
						JOptionPane.showMessageDialog(null,"Excellent!");
					break;
					case 2:
						JOptionPane.showMessageDialog(null, "Good!");
					break;
					case 3:
						JOptionPane.showMessageDialog(null, "Keep up the good work!");
					break;
					case 4:
						JOptionPane.showMessageDialog(null, "Nice work!");
					break;					
					}					
				}
				else
				{
					switch ( rand.nextInt( 4 ) )
					{
					case 1:
						JOptionPane.showMessageDialog(null, "No. Please try again!");
					break;
					case 2:
						JOptionPane.showMessageDialog(null, "Wrong. Try once more!");
					break;
					case 3:
						JOptionPane.showMessageDialog(null, "Don't give up!");
					break;
					case 4:
						JOptionPane.showMessageDialog(null, "No. Keep trying.");
					break;
					}		
				}			
			}		
		
		
			public void inputAnswer()
			{
				JOptionPane.showMessageDialog(null, "Hello, welcome to the quiz");
				simulateQuestion();
				
			}
}

