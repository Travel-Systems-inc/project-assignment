# **Virtual Travel**
## **Table of Contents**
1. [Overview](#overview)
2. [Product Spec](#product-spec)
3. [Wireframes](#wireframes)
## Overview
### **Description**
A travel game similar to a fusion of Pokemon Go and Clash of Clans, where you build bases, create allies/enemies and leave notes on a virtual map of the real world. It uses your current geolocation of your device and Google Maps to setup the playfield and allows you to view added friend players near you and other player's bases. Future of the app can go to focus on adding a battling/contesting between players' bases aspect or focus on friendly player interaction where bases are stations or oasis players can visit to trade and exchange.

### **App Evaluation**
- **Category:** GPS AR game
- **Story:** Mark places you been to by building bases and interacting with nearby players
- **Market:** Active young-adults to adults that are active in travelling or physical activity in general
- **Habit:** This app is not intended to be used all day but is meant to bring people the player knows together and try to work together
- **Scope:** From one person this app can bring that person's network together and create a more enhanced experience

## **Product Spec**

### 1.	User Stories (Required/Optional)
#### **Required Must-Have Stories**
- User views main page when no account is logged in
- User fills form to receive email to register account
- User enters credentials to log into registered account
- User views main map screen when logged in
- User views player stats through the profile page
- User edits user settings in the settings page
- User creates a base in vacant area within a close distance to their current location
- User switches to freeroam mode and can view all bases and notes in a area
- User write a note at a location
- User finds and reads notes left by other players around current location

#### **Optional Nice-to-have Stories**
- User battles other bases
- Users defend base against others
- User upgrades bases
- Users can band together to power-up bases

### 2.	Screens 
- Main Login
- Registration
	- After installing the application, the user needs to log in/register for an account in order to have access for service, product reselling, rental, etc.
- Map View
	- If user allows current location permission, Google map of current location is loaded and user character and nearby bases are overlaid on screen.
	- Else without current location permission, empty screen with message stating map can't be loaded is displayed
	- Button that goes to settings screen is at top-left
- Settings
	- Users can change their language, preferences, and notification 

### **3.	Navigation**
**Tab Navigation (Tab to Screen)**
- **User Profile**
- **Travel Notebook**
- **Base Status Tracker**
- **Settings**

**Flow Navigation (Screen to Screen)**
- Log-In Screen -> Account Creation
- Settings -> toggle the settings

## Wireframes

![20230322_110941(1)](https://user-images.githubusercontent.com/70590429/226950289-0e17a1f5-17bf-420c-9ca4-0a8ccfda0eac.jpg)

## Schema

### **Models**
User
|**Document Field**|**Type**|**Description**|
|------------|--------|---------------|
| name | String | Name of User |
| email  | String | Email of user account |
| createdAt | Timestamp | Date the user made an account |
| level | Number | The player's experience level (1-256) |
| visible | Number | Binary flag for whether friends can see you (1) or not (0) in-game |
| friends | Array | Array of User names that are friends |
| requests | Array | Array of User names requesting to be friends |

Base
|**Document Field**|**Type**|**Description**|
|------------|--------|---------------|
| name | String | Name declared for base |
| createdAt | Timestamp | Date when the base was founded |
| owner | Reference | User that created the base |
| center | Geopoint | Longitude and Latitude of base center |
| members | Array | User reference array that are trusted in the base |
| type | String | Says what type of base it is ('public' [nearby users can join], 'private' [only invited players can join]) |

Note
|**Document Field**|**Type**|**Description**|
|------------|--------|---------------|
| author | Reference | The user that created the note |
| createdAt | Timestamp | Date note was written |
| location | Geopoint | Location note was left at |
| title | String | Label of note (filtering is applied before creation and after being retrieved, and max character length of 25) |

## **Networking**
 - Main Screen
 	- (No requests are sent)
 - Login Screen
	- (GET `localhost:8080/api/login/`) sends user login request to the firebase Authentication and returns whether login was successful or not
 - Registration Screen
 	- (POST `localhost:8080/api/register/`) registers a user account that does not use the same email as another user to firebaseAuth
 - MapView Screen
 	- (GET `localhost:8080/api/note/?point={lat},{lng}&rad={radius}`) retrieve all notes within a radius from a location
	- Settings (collapsible panel)

## **Build Progress**
### Sprint 1 - February 11, 2023
### Sprint 2 - February 22, 2023
### Sprint 3 - March 1, 2023
 
 - Created a Firebase Datastore with some example documents of our proposed models
 
### Sprint 4 - March 8, 2023
 
 - Created Login Page
 
 - Created Registration Page

### Sprint 5 - March 22, 2023

 - Created draft for MapView page

 ![progressMilestone5](https://user-images.githubusercontent.com/70590429/227332733-a3533738-39d7-4af6-bfdb-2921cda700c4.gif)

 - Started Firebase authentication using Email/Password accounts

![authentication_Firebase_Console](https://user-images.githubusercontent.com/70590429/227271912-0dc45877-869a-4d0c-a3e5-c1c38cd68556.gif)

- Added "type" field to "Base" Collection (a base can be public or private)

### Sprint 6 - March 29, 2023
- Moved 'Update Login Page' to sprint 7 instead of 6 and renamed to 'Finalize Login page barebones'

- Started a ReactJS app with Github codespace (editing can be done in the vscode editor that opens up or in IntelliJ by using JetBrains Gateway and connecting to github codespace)

![progressMilestone6](https://user-images.githubusercontent.com/70590429/228701021-4f00c9b9-a0bf-4564-92b5-eb4d63e0c50a.gif)

- Have a login screen

![progressMilestone6 1](https://user-images.githubusercontent.com/70590429/228701490-f25cc8a6-6701-4e9a-be38-067b48021a11.gif)

- Have settings screen

### Sprint 7 - April 5, 2023
### Sprint 8 - April 12, 2023
### Sprint 9 - April 23, 2023
- Worked on getting the screens to look like the presentation wireframes
#### New screenshot of MapView page
![Screenshot 2023-05-04 at 22-14-22 React App](https://user-images.githubusercontent.com/70590429/236364953-a15be2fe-40d5-41cb-adcc-86f500335d3f.png)
#### Login page
![Screenshot 2023-05-04 at 22-14-46 React App](https://user-images.githubusercontent.com/70590429/236364994-738178db-c2b1-491d-96dc-9911808f9e92.png)

