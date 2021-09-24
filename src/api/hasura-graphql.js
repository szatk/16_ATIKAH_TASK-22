import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const HASURA_GRAPHQL_ENDPOINT = 'https://atikah.hasura.app/v1/graphql'

const client = new ApolloClient({
  uri: HASURA_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret':
      'PfiGBCCIn9welk9fd1ifvTU445h3uxDuUPDGTyRDSFuP3QUlFtNTYWTD1g7dwK6X'
  }
})

export default client

export const GET_ANGGOTA = gql`
  query GET_ANGGOTA {
    anggota {
      nama
      umur
      id
      jeniskelamin
      keterangans {
        id
        id_anggota
        nilai
        pelajaran
        status
      }
    }
  }
`

// Tanda seru pada "$id: Int!" artinya saat passing variable "id", nilainya GA BOLEH NULL
export const GET_ANGGOTA_BY_ID = gql`
  query MyQuery($id: Int!) {
    anggota_by_pk(id: $id) {
      id
      jeniskelamin
      nama
      umur
      keterangans {
        id
        id_anggota
        nilai
        pelajaran
        status
      }
    }
  }
`

export const INSERT_ONE_ANGGOTA = gql`
  mutation ADD_ANGGOTA($data: anggota_insert_input!) {
    insert_anggota_one(object: $data) {
      jeniskelamin
      nama
      umur
      keterangans {
        id
        id_anggota
        nilai
        pelajaran
        status
      }
      id
    }
  }
`

export const DELETE_ANGGOTA_BY_ID = gql`
  mutation DELETE_ANGGOTA_BY_ID($id: Int!) {
    delete_anggota_by_pk(id: $id) {
      id
      nama
      jeniskelamin
      umur
      keterangans {
        id
        nilai
        pelajaran
        status
      }
    }
  }
`

export const UPDATE_ANGGOTA = gql`
  mutation MyMutation2(
    $id: Int!
    $nama: String!
    $umur: Int!
    $jeniskelamin: String!
  ) {
    update_anggota_by_pk(
      pk_columns: { id: $id }
      _set: { nama: $nama, umur: $umur, jeniskelamin: $jeniskelamin }
    ) {
      id
      nama
      umur
      jeniskelamin
      keterangans {
        id
        id_anggota
        nilai
        pelajaran
        status
      }
    }
  }
`