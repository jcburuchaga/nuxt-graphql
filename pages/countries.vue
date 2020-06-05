<template>
  <v-layout> 
    <v-flex
      xs24
      sm24
      md24
    >
    <v-text-field 
      label="Buscar área"
      @change="setCountries($event)"
    ></v-text-field >
    <v-card>
      <v-progress-linear
      v-if="isLoading"
      indeterminate
      color="cyan"
      ></v-progress-linear>
      <v-data-table
        v-else
        :headers="headers"
        :items="countries" 
      >
      <template v-slot:item.currencies="{ item }">
        <v-chip v-for="currency in item.currencies" :key="currency._id" color="green">
         {{ currency.name }}
        </v-chip>
      </template> 
      </v-data-table>
    </v-card> 
    </v-flex>
  </v-layout>
</template>
<script>

import country from '@/services/country';

export default {
    data () {
      return {
        headers: [
          {
            text: 'País',
            align: 'start',
            value: 'name',
          },
          { text: 'Moneda', value: 'currencies' },
          { text: 'Bandera', value: 'flag.emoji' },
        ],
        countries: [],
        isLoading: true,
      } 
    },
    created(){
      this.setCountries(null);
    },
    methods: {
      setCountries(region) {
        console.log(region);
        this.isLoading = true;
        if(!region){
        country.getAllCountries()
            .then(res => {
              this.isLoading = false;
              this.countries = res.data.Country
              })
            .catch(err => {
              console.log('could not load countries', err);
              this.isLoading = false;
            });
        } else {
          country.getCountriesByArea(region)
            .then(res => {
              this.isLoading = false;
              this.countries = res.data.Country
              })
            .catch(err => {
              console.log('could not load countries', err);
              this.isLoading = false;
            });
        }
      },  
    }
  }
</script>