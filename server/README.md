## Models

---

### User

- ID
- email
- password

### Profile

- ID
- name
- cpf
- crm
- birth_date
- user_id

### Roles

- ID
- type [CARER, NEUROLOGIST, PATIENT]
- user_id

### PatientLog

- ID
- data
- type [OXYGENATION, HEARTBEAT, ULTRASOUND]
- date_time
- user_id
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

### Neurologist_Patient

- ID
- neurologist_id
- patient_id
- intervention : bool

### CARER_PATIENT

- ID
- patient_id
- carer_id

## Routes

---

| Route                         | Description                    |
| ----------------------------- | ------------------------------ |
| `/users/:user_id/log/average` | `Media Dos Dados de Monitoria` |
