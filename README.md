# **Travel Systems inc**
## **Table of Contents**
1. Overview
2. Product Spec
3. Wireframes
## **Overview**
### **Description**
A travel game similar to Clash of Clans and Pokemon Go, where you claim areas that you are currently located at as your base. It uses your current geolocation and Google Maps to setup the playfield and allows you to also view local players near you. Expand a base to other areas, invite other players to be a member of your base to strengthen it, and battle other player bases that can contest for your base's land.

### **App Evaluation**
- **Category:** Location-based game
- **Story:** Mark places you been to by building bases and interacting with nearby players
- **Market:** Any musicians that wants to buy/sell their instruments, repair their instruments, 
- **Habit:** This app is intended to use 
- **Scope:** 

## **Product Spec**

### 1.	User Stories (Required/Optional)
#### **Required Must-Have Stories**
- User logs in to access preference settings
- User can pick their favorite ensemble (woodwinds, brass, percussion)/ User can search
 - User can choose filters
 - User can choose an instrument
  - User can comment on instrument
  - User can like insrument
  - User can rate an instrument
- User can buy/rent instruments & accessories for a reasonable price
- User can request repair service
- User can sell instruments at a reasonable price
 - User can input in their address and billing and sumbit

#### **Optional Nice-to-have Stories**
- User logs in to see their previous payments/search history

### 2.	Screens 
- Login
- Create an account
	-After installing the application, the user needs to log in/register for an account in order to have access for service, product reselling, rental, etc.
- Service Screen 
	- Allows the user to provide for customers where the company may need the customer’s information and their instrument (if they don’t have an account)
	- Also provides services prices
- Rent Instruments & Accessories Screen
	- Allows users to rent brass, woodwinds, or percussion instruments that available on the website
	- Payment Plan options/paid-in-full
- Buy/Sell Instruments Screen
	- Provide information on the music instruments the company’s selling
	- Allow users to have an option to sell their instruments
	- Provide description on which instruments are being sold, previous uses, etc
- Settings Screen 
	- Users can change their language, preferences, and notification 

### **3.	Navigation**
**Tab Navigation (Tab to Screen)**
- **Service Selection**
- **Sell Instruments Section**
- **Buy/Rental Section**
- **Profile**
- **Settings**

Optional: 
- Settings
- Profile
(These may be in menu)

**Flow Navigation (Screen to Screen)**
- Log-In Screen -> Account Creation
- Service Option -> Account Log-In -> Service’s Provider Information
- Buy/Sell Instruments -> Payment Info
- Rental Instruments Option-> Account Log-In ->Payment Plan
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
| 

Product
|**Property**|**Type**|**Description**|
|------------|--------|---------------|
| Instrument | String | Name of instrument |
| Desc | String | Description of instrument |
| Brand | String | Instrument's brand |
| Price | Decimal | Instrument's sell price |
| Rating | Integer | Instrument's quality rating |
| Tags | Array | Product tags for filtering |
| InCart | Boolean | Cart indicator |

## **Networking**
- Login Screen
	- (POST) create new user account
	- (PUT) change forgotten password
	- (GET) log into existing account
- Home Screen
	- (GET) Query first few instruments of a specific tag(ex. top 5 woodwinds)
- Instrument View Screen
	- (GET) Show instrument data (name, description, and price)
	- (GET) Query instrument in inventory according to search filters
- Buy/Rent Screen
	- (PUT) add instrument(s) to cart to buy/rent
	- (PUT) remove items from cart
- Repair/Service Screen
	- (POST) submit repair information as new object in Repair class
- Sell Screen
	- (POST) enter new instrument into Products class
