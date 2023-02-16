# **Travel Systems inc**
## **Table of Contents**
1. Overview
2. Product Spec
3. Wireframes
## **Overview**
### **Description**
A travel game where you claim areas that you are currently located at as your base. It uses your current geolocation of your device and Google Maps to setup the playfield and allows you to also view local players near you. Expand a base to other areas, invite other players to be a member of your base to strengthen it, and battle other player bases that can contest for your base's land.

### **App Evaluation**
- **Category:** GPS AR game
- **Story:** Mark places you been to by building bases and interacting with nearby players
- **Market:** Active young-adults to adults that are active in travelling or physical activity in general
- **Habit:** This app is not intended to be used all day but is meant to bring people the player knows together and try to work together
- **Scope:** From one person this app can bring that person's network together and create a more enhanced experience

## **Product Spec**

### 1.	User Stories (Required/Optional)
#### **Required Must-Have Stories**
- User creates an account
- User can view their character on the map
- User can create a base if an area is uninhabited
- User can freeroam and view other player's bases on the map (but only bases that are in areas that you visited)
- User can read notes left by other players (in seen areas)

#### **Optional Nice-to-have Stories**
- Battle other bases
- Defend your base against others
- User can upgrade bases

### 2.	Screens 
- Login
- Create an account
	-After installing the application, the user needs to log in/register for an account in order to have access for service, product reselling, rental, etc.
- Settings Screen 
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

## Schema

### **Models**
User
|**Property**|**Type**|**Description**|
|------------|--------|---------------|
| username | String | Name of user |
| email  | String | Email of user |
| password | String | Password of user |
| level | Float | The player's experience in the game |
| visible | Boolean | Flag for whether local players can find you on the map or not |
| ownedBases | Array | References to bases that are owned by this player |
| trustedBases | Array | References to bases that trust you |

Base
|**Property**|**Type**|**Description**|
|------------|--------|---------------|
| userId | Reference | Owner of the base |
| center | Location | Longitude and Latitude of base center |
| members | Array | An array of user references that are trusted in the base |
| level | Float | The maturity of the base |

Note
|**Property**|**Type**|**Description**|
|------------|--------|---------------|
| author | Reference | The user that created the note |
| description | String | The contents of the note |

## **Networking**
- Login Screen
	- (POST) create new user account
	- (PUT) change forgotten password
	- (GET) log into existing account
