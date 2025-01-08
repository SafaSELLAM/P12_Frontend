
# React + Vite

## SportSee - OpenClassrooms Project 12

### Installation

#### Prérequis

- **NodeJS** (version 12.18 ou plus récente)
- **npm** (ou Yarn)

#### Backend : Installation et Lancement

1. Clonez le dépôt backend :
   ```shell
   git clone https://github.com/SafaSELLAM/P12_SportSee.git
    ```
2. Une fois dans le répertoire cloné, installez toutes les dépendances :

```shell
npm install
```
3. Lancer le Backend : 
```shell
yarn dev
```
#### Frontend :  Lancement 

1. Après avoir cloner le repo , se placer dans le dossier Frontend et lancer la commande : 
```shell
npm run dev
```

---

### Configuration

Afin de personnaliser le comportement de l'application, Modifier le fichier  `.env` dans le dossier Frontend :

- **Passer aux data Backend:**  
  Passer la variable `VITE_APP_USE_MOCK` à `0`:  
  ```env
  VITE_APP_USE_MOCK=0
  ```
  Cela permettra l'utilisation desdonnées récupérées du Backend au lieu des mock data.

- **Changer le user ID:**  
  Passser la variable  `VITE_APP_USERID` à `12` ou `18` (Ce sont les seuls id disponibles):  
  ```env
  VITE_APP_USERID=18
  ```

Par défaut:
- `VITE_APP_USE_MOCK=1` (Utilise les données mock).
- `VITE_APP_USERID=18` (User ID par défaut).

---


## SportSee - OpenClassrooms Project 12

### Installation

#### Prerequisites

- **NodeJS** (version 12.18 or higher)
- **npm** (or Yarn)

#### Backend: Installation and Launch

1. Clone the backend repository:
   ```shell
   git clone https://github.com/SafaSELLAM/P12_SportSee.git

2. Once inside the cloned repository, install all dependencies :

```shell
npm install
```

3. Launch the backend:

```shell
yarn dev
```

#### Frontend :  Launch 

1. After cloning the repository, navigate to the Frontend folder and run the following command:

```shell
npm run dev
```


---

### Configuration

To customize the behavior of the application, update the `.env` file in the Frontend folder:

- **Switch to Backend data:**  
  Set the `VITE_APP_USE_MOCK` variable to `0` in the `.env` file:  
  ```env
  VITE_APP_USE_MOCK=0
  ```
  This will enable the use of live backend data instead of mock data.

- **Change the user ID:**  
  Set the `VITE_APP_USERID` variable to either `12` or `18` (the only available user IDs):  
  ```env
  VITE_APP_USERID=18
  ```

By default:
- `VITE_APP_USE_MOCK=1` (uses mock data).
- `VITE_APP_USERID=18` (default user ID).
