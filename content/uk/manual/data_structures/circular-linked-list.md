---
title: "Circular Linked List"
date: 2019-06-23
type: "manual"
tags: ["algorithms", "Single", "Linked List", "Development"]
image: images/manual/circular-linked-list.jpg
description : "Circular Linked List"
---
### What is Circular Linked List?
In single linked list, every node points to its next node in the sequence and the last node points NULL. But in circular linked list, every node points to its next node in the sequence but the last node points to the first node in the list.

***A circular linked list is a sequence of elements in which every element has a link to its next element in the sequence and the last element has a link to the first element.***

That means circular linked list is similar to the single linked list except that the last node points to the first node in the list

#### Example

![Example of single linked list](/images/manual/Circular-linked-list.gif)

### Operations
In a circular linked list, we perform the following operations...

- Insertion
- Deletion
- Display

Before we implement actual operations, first we need to setup empty list. First perform the following steps before implementing actual operations.

- ***Step 1*** - Include all the header files which are used in the program.
- ***Step 2*** - Declare all the user defined functions.
- ***Step 3*** - Define a Node structure with two members data and next
- ***Step 4*** - Define a Node pointer 'head' and set it to NULL.
- ***Step 5*** - Implement the main method by displaying operations menu and make suitable function calls in the main method to perform user selected operation.

### Insertion
In a circular linked list, the insertion operation can be performed in three ways. They are as follows...

Inserting At Beginning of the list
Inserting At End of the list
Inserting At Specific location in the list

### Inserting At Beginning of the list
We can use the following steps to insert a new node at beginning of the circular linked list...

- ***Step 1*** - Create a newNode with given value.
- ***Step 2*** - Check whether list is Empty (head == NULL)
- ***Step 3*** - If it is Empty then, set head = newNode and newNode→next = head .
- ***Step 4*** - If it is Not Empty then, define a Node pointer 'temp' and initialize with 'head'.
- ***Step 5*** - Keep moving the 'temp' to its next node until it reaches to the last node (until 'temp → next == head').
- ***Step 6*** - Set 'newNode → next =head', 'head = newNode' and 'temp → next = head'.

### Inserting At End of the list
We can use the following steps to insert a new node at end of the circular linked list...

- ***Step 1*** - Create a newNode with given value.
- ***Step 2*** - Check whether list is Empty (head == NULL).
- ***Step 3*** - If it is Empty then, set head = newNode and newNode → next = head.
- ***Step 4*** - If it is Not Empty then, define a node pointer temp and initialize with head.
- ***Step 5*** - Keep moving the temp to its next node until it reaches to the last node in the list (until temp → next == head).
- ***Step 6*** - Set temp → next = newNode and newNode → next = head.

### Inserting At Specific location in the list (After a Node)
We can use the following steps to insert a new node after a node in the circular linked list...

- ***Step 1*** - Create a newNode with given value.
- ***Step 2*** - Check whether list is Empty (head == NULL)
- ***Step 3*** - If it is Empty then, set head = newNode and newNode → next = head.
- ***Step 4*** - If it is Not Empty then, define a node pointer temp and initialize with head.
- ***Step 5*** - Keep moving the temp to its next node until it reaches to the node after which we want to insert the newNode (until temp1 → data is equal to location, here location is the node value after which we want to insert the newNode).
- ***Step 6*** - Every time check whether temp is reached to the last node or not. If it is reached to last node then display 'Given node is not found in the list!!! Insertion not possible!!!' and terminate the function. Otherwise move the temp to next node.
- ***Step 7*** - If temp is reached to the exact node after which we want to insert the newNode then check whether it is last node (temp → next == head).
- ***Step 8*** - If temp is last node then set temp → next = newNode and newNode → next = head.
- ***Step 9*** - If temp is not last node then set newNode → next = temp → next and temp → next = newNode.

### Deletion
In a circular linked list, the deletion operation can be performed in three ways those are as follows...

- Deleting from Beginning of the list
- Deleting from End of the list
- Deleting a Specific Node

### Deleting from Beginning of the list
We can use the following steps to delete a node from beginning of the circular linked list...

- ***Step 1*** - Check whether list is Empty (head == NULL)
- ***Step 2*** - If it is Empty then, display 'List is Empty!!! Deletion is not possible' and terminate the function.
- ***Step 3*** - If it is Not Empty then, define two Node pointers 'temp1' and 'temp2' and initialize both 'temp1' and 'temp2' with head.
- ***Step 4*** - Check whether list is having only one node (temp1 → next == head)
- ***Step 5*** - If it is TRUE then set head = NULL and delete temp1 (Setting Empty list conditions)
- ***Step 6*** - If it is FALSE move the temp1 until it reaches to the last node. (until temp1 → next == head )
- ***Step 7*** - Then set head = temp2 → next, temp1 → next = head and delete temp2.

### Deleting from End of the list
We can use the following steps to delete a node from end of the circular linked list...

- ***Step 1*** - Check whether list is Empty (head == NULL)
- ***Step 2*** - If it is Empty then, display 'List is Empty!!! Deletion is not possible' and terminate the function.
- ***Step 3*** - If it is Not Empty then, define two Node pointers 'temp1' and 'temp2' and initialize 'temp1' with head.
- ***Step 4*** - Check whether list has only one Node (temp1 → next == head)
- ***Step 5*** - If it is TRUE. Then, set head = NULL and delete temp1. And terminate from the function. (Setting Empty list condition)
- ***Step 6*** - If it is FALSE. Then, set 'temp2 = temp1 ' and move temp1 to its next node. Repeat the same until temp1 reaches to the last node in the list. (until temp1 → next == head)
- ***Step 7*** - Set temp2 → next = head and delete temp1.

### Deleting a Specific Node from the list
We can use the following steps to delete a specific node from the circular linked list...

- ***Step 1*** - Check whether list is Empty (head == NULL)
- ***Step 2*** - If it is Empty then, display 'List is Empty!!! Deletion is not possible' and terminate the function.
- ***Step 3*** - If it is Not Empty then, define two Node pointers 'temp1' and 'temp2' and initialize 'temp1' with head.
- ***Step 4*** - Keep moving the temp1 until it reaches to the exact node to be deleted or to the last node. And every time set 'temp2 = temp1' before moving the 'temp1' to its next node.
- ***Step 5*** - If it is reached to the last node then display 'Given node not found in the list! Deletion not possible!!!'. And terminate the function.
- ***Step 6*** - If it is reached to the exact node which we want to delete, then check whether list is having only one node (temp1 → next == head)
- ***Step 7*** - If list has only one node and that is the node to be deleted then set head = NULL and delete temp1 (free(temp1)).
- ***Step 8*** - If list contains multiple nodes then check whether temp1 is the first node in the list (temp1 == head).
- ***Step 9*** - If temp1 is the first node then set temp2 = head and keep moving temp2 to its next node until temp2 reaches to the last node. Then set head = head → next, temp2 → next = head and delete temp1.
- ***Step 10*** - If temp1 is not first node then check whether it is last node in the list (temp1 → next == head).
- ***Step 11***- If temp1 is last node then set temp2 → next = head and delete temp1 (free(temp1)).
- ***Step 12*** - If temp1 is not first node and not last node then set temp2 → next = temp1 → next and delete temp1 (free(temp1)).

### Displaying a circular Linked List
We can use the following steps to display the elements of a circular linked list...

- ***Step 1*** - Check whether list is Empty (head == NULL)
- ***Step 2*** - If it is Empty, then display 'List is Empty!!!' and terminate the function.
- ***Step 3*** - If it is Not Empty then, define a Node pointer 'temp' and initialize with head.
- ***Step 4*** - Keep displaying temp → data with an arrow (--->) until temp reaches to the last node
- ***Step 5*** - Finally display temp → data with arrow pointing to head → data.

#### Implementation of Circular Linked List using C Programming
```C
#include<stdio.h>
#include<conio.h>

void insertAtBeginning(int);
void insertAtEnd(int);
void insertAtAfter(int,int);
void deleteBeginning();
void deleteEnd();
void deleteSpecific(int);
void display();

struct Node
{
   int data;
   struct Node *next;
}*head = NULL;

void main()
{
   int choice1, choice2, value, location;
   clrscr();
   while(1)
   {
      printf("\n*********** MENU *************\n");
      printf("1. Insert\n2. Delete\n3. Display\n4. Exit\nEnter your choice: ");
      scanf("%d",&choice1);
      switch()
      {
         case 1: printf("Enter the value to be inserted: ");
         		 scanf("%d",&value);
                 while(1)
                 {
                 	printf("\nSelect from the following Inserting options\n");
                 	printf("1. At Beginning\n2. At End\n3. After a Node\n4. Cancel\nEnter your choice: ");
                    scanf("%d",&choice2);
                    switch(choice2)
                    {
                       case 1: 	insertAtBeginning(value);
                       		break;
                       case 2: 	insertAtEnd(value);
                       		break;
                       case 3: 	printf("Enter the location after which you want to insert: ");
                       		scanf("%d",&location);
                       		insertAfter(value,location);
                       		break;
                       case 4: 	goto EndSwitch;
                       default: printf("\nPlease select correct Inserting option!!!\n");
                    }
                 }
         case 2: while(1)
                 {
                 	printf("\nSelect from the following Deleting options\n");
                 	printf("1. At Beginning\n2. At End\n3. Specific Node\n4. Cancel\nEnter your choice: ");
                    scanf("%d",&choice2);
                    switch(choice2)
                    {
                       case 1: 	deleteBeginning();
                       		break;
                       case 2: 	deleteEnd();
                       		break;
                       case 3: 	printf("Enter the Node value to be deleted: ");
                       		scanf("%d",&location);
                       		deleteSpecic(location);
                       		break;
                       case 4:	goto EndSwitch;
                       default: printf("\nPlease select correct Deleting option!!!\n");
                    }
                 }
                 EndSwitch: break;
         case 3: display();
         	 break;
         case 4: exit(0);
         default: printf("\nPlease select correct option!!!");
      }
   }
}

void insertAtBeginning(int value)
{
    struct Node *newNode;
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode -> data = value;
    if(head == NULL)
    {
       head = newNode;
       newNode -> next = head;
    }
    else
    {
       struct Node *temp = head;
       while(temp -> next != head)
          temp = temp -> next;
       newNode -> next = head;
       head = newNode;
       temp -> next = head;
    }
    printf("\nInsertion success!!!");
}
void insertAtEnd(int value)
{
   struct Node *newNode;
   newNode = (struct Node*)malloc(sizeof(struct Node));
   newNode -> data = value;
   if(head == NULL)
   {
      head = newNode;
      newNode -> next = head;
   }
   else
   {
      struct Node *temp = head;
      while(temp -> next != head)
         temp = temp -> next;
      temp -> next = newNode;
      newNode -> next = head;
   }
   printf("\nInsertion success!!!");   
}
void insertAfter(int value, int location)
{
   struct Node *newNode;
   newNode = (struct Node*)malloc(sizeof(struct Node));
   newNode -> data = value;
   if(head == NULL)
   {      
      head = newNode;
      newNode -> next = head;
   }
   else
   {
      struct Node *temp = head;
      while(temp -> data != location)
      {
         if(temp -> next == head)
         {
            printf("Given node is not found in the list!!!");
            goto EndFunction;
         }
         else
         {
            temp = temp -> next;
         }
      }
      newNode -> next = temp -> next;
      temp -> next = newNode;
      printf("\nInsertion success!!!");
   }
   EndFunction:
}
void deleteBeginning()
{
   if(head == NULL)
      printf("List is Empty!!! Deletion not possible!!!");
   else
   {
      struct Node *temp = head;
      if(temp -> next == head)
      {
         head = NULL;
         free(temp);
      }
      else{
         head = head -> next;
         free(temp);
      }
      printf("\nDeletion success!!!");
   }
}
void deleteEnd()
{
   if(head == NULL)
      printf("List is Empty!!! Deletion not possible!!!");
   else
   {
      struct Node *temp1 = head, temp2;
      if(temp1 -> next == head)
      {
         head = NULL;
         free(temp1);
      }
      else{
         while(temp1 -> next != head){
            temp2 = temp1;
            temp1 = temp1 -> next;
         }
         temp2 -> next = head;
         free(temp1);
      }
      printf("\nDeletion success!!!");
   }
}
void deleteSpecific(int delValue)
{
   if(head == NULL)
      printf("List is Empty!!! Deletion not possible!!!");
   else
   {
      struct Node *temp1 = head, temp2;
      while(temp1 -> data != delValue)
      {
         if(temp1 -> next == head)
         {
            printf("\nGiven node is not found in the list!!!");
            goto FuctionEnd;
         }
         else
         {
            temp2 = temp1;
            temp1 = temp1 -> next;
         }
      }
      if(temp1 -> next == head){
         head = NULL;
         free(temp1);
      }
      else{
         if(temp1 == head)
         {
            temp2 = head;
            while(temp2 -> next != head)
               temp2 = temp2 -> next;
            head = head -> next;
            temp2 -> next = head;
            free(temp1);
         }
         else
         {
            if(temp1 -> next == head)
            {
               temp2 -> next = head;
            }
            else
            {
               temp2 -> next = temp1 -> next;
            }   
            free(temp1);
         }
      }
      printf("\nDeletion success!!!");
   }
   FuctionEnd:
}
void display()
{
   if(head == NULL)
      printf("\nList is Empty!!!");
   else
   {
      struct Node *temp = head;
      printf("\nList elements are: \n");
      while(temp -> next != head)
      {
         printf("%d ---> ",temp -> data);
      }
      printf("%d ---> %d", temp -> data, head -> data);
   }
}

```