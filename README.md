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
- User enters main page/logs off account
- User registers a new account
- User logs into registered account
- User views main map screen
- User creates a base in uninhabited area
- User switches to freeroam mode
- User write a note 
- User finds and reads notes left by other players around current location

#### **Optional Nice-to-have Stories**
- Battle other bases
- UserDefend your base against others
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
|**Document**|**Type**|**Description**|
|------------|--------|---------------|
| email  | String | Email of user account |
| createdAt | Timestamp | Date the user made an account |
| level | Number (1-255) | Scores the player's playing experience |
| visible | Number (0 or 1) | Flag for whether friends can see you (1) or not (0) in-game |
| friends | Array | User reference array of friends |
| requests | Array | User reference array of users requesting to be friends |

Base
|**Document**|**Type**|**Description**|
|------------|--------|---------------|
| createdAt | Timestamp | Date when the base was founded |
| owner | Reference | User that created the base |
| center | Geopoint | Longitude and Latitude of base center |
| members | Array | User reference array that are trusted in the base |
| level | Number (1-255) | The maturity of the base |

Note
|**Property**|**Type**|**Description**|
|------------|--------|---------------|
| author | Reference | The user that created the note |
| createdAt | Timestamp | Date note was written |
| location | Geopoint | Location note was left at |
| description | String | The contents of the note (filtering is applied before creation and after being retrieved) |

## **Networking**
- Login Screen
	- (POST) create new user account
	- (PUT) change forgotten password
	- (GET) log into existing account

## **Build Progress**
### Sprint 1
### Sprint 2
### Sprint 3
 - March 1, 2023: Created a Firebase Datastore with some example documents of our proposed models
