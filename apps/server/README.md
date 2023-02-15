# Getting started

### Install yarn

```bash
npm install --global yarn
```

### Install dependencies

```bash
yarn install
```

### Add the following Environment Variables

```bash
MONGO_URI=mongodb://localhost:27017/phone_finder?retryWrites=true&w=majority
MONGO_SECRET=pigeon123
CLIENT_URL=http://localhost:5173
```

### Start the Dev Server

```bash
yarn dev
```

### Populate the DB script

Run the following command substituting `admin_password` and `user_password` with custom passwords.

> **Note**: The passwords stored in the database will be hashed.

```bash
node app/helpers/populate/populateDB.js admin_password user_password
```

#### Population Customization

To customize the data populated in the database the following changes can be made:

1. Comment or uncomment specific tables run in the population within the `app/helpers/populateDB.js` file. Specifically, in the `populateDB` function.
2. The `Phone`, `Question`, and `Answer` data are all found in `app/models/sampleData/`, in `allPhones.json`, `allQuestions.json`, and `allAnswers.json` respectively.
