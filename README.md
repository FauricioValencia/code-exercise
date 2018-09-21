# Intro

We want to build a simple app to work with time and expense data. The data is contained in two CSV files called time.csv and expenses.csv. Below, you'll find a few stories that we'd like to implement. Please read through them and let us know if you have any questions.

# Stories

## Users should be able to see entries

The wireframe for this story is wireframes/see_entries.png

As a User,  
Because I want to be able to see time and expense entries,  
When I click on the "Upload CSV" button,  
Then I should be able to select a file from my computer containing time entries,  
And when I select a file from my computer,  
Then I should see the list of entries that I uploaded from the file displayed in a table,  
And when I click the "Upload CSV" button again,  
Then I should be able to select another file from my computer containing expense entries,  
And when I select a file from my computer,  
Then the new entries should be added to the table,  
And I should be able to see the entries from both CSV files in the table,  
And when I refresh the page,  
Then I should still see the entries that I uploaded from both CSV files in the table.  

## Users should be able to see the total dollar amount for entries

The wireframe for this story is wireframes/totals.png

As a User,  
Because I want to know how much money I've billed in time and expenses,  
When I'm viewing entries that I've uploaded from a CSV,  
Then I should see one total for time,  
And I should see another total for expenses,  
And I should see another total for time and expenses combined.  

## Users should be able to sort entries

The wireframes for this story are wireframes/sorting_first_time.png, wireframes/sorting_second_time.png, wireframes/sorting_different_column.png

As a User,  
Because I want to be able easily find specific entries,  
When I click on the name of a column,  
Then I should see a down arrow next to the name of the column,  
And the entries should be sorted by that column descending,  
And if I click on the name of the column again,  
Then the arrow next to the column name should point up,  
And I should see the entries should be sorted by that column ascending,  
And if I click on the name of another column,  
Then the down arrow should disappear from the previous column name and should appear next to the column name that I just clicked,  
And the entries should be sorted by that column descending.

The frontend is React and was created with [create-react-app](https://github.com/facebook/create-react-app). The backend is a simple Express server with Mongoose.

- Intro
- Rules
- Stories
- Setup
- Development