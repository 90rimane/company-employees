<script>
  export default {
    created() {
      fetch('http://localhost:3000/api/employees')
        .then((response) => response.json())
        .then((employees) => {
          this.employees = employees
        })
    },
    data() {
      return {
        employees: null
      }
    }
  }
</script>

<template>
  <h3>Employee List:</h3>
  <ol>
    <li key="emp-id" v-for="employee in employees">{{ employee.employeeName }}</li>
  </ol>
</template>
