import random
def play_game():
    print("hello welcome to rock paper scissor game :)")
    while True:
        player_choice = input("enter your choice (0 for rock, 1 for paper and 2 for scissor): ")
        if player_choice not in ['0','1','2']:
            print("invalid choice , please enter 0 for rock , 1 for paper and 2 for scissor")
        player_choice=int(player_choice)

        #computer choice
        computer_choice= random.randint(0,2)
        print(f"the computer choic is:{computer_choice}")

        #check the winner
        if player_choice == computer_choice:
            print("It's a tie")
        elif (player_choice==0 and computer_choice==2) or\
             (player_choice==1 and computer_choice==0) or\
             (player_choice==2 and computer_choice==1):
            print("you win")
        else:
            print("Computer win")


        play_again=input("Do you want to play yes/no:").lower()
        if play_again != 'yes':
            print("Thanks for playing")
            break
play_game()        

           








