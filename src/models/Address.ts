import {
  DataTypes, Model, Sequelize,
} from 'sequelize';

interface AddressAttributes {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface AddressCreationAttributes extends AddressAttributes { }

class Address extends Model<AddressAttributes, AddressCreationAttributes>
  implements AddressAttributes {
  public cep!: string;
  public logradouro!: string;
  public complemento!: string;
  public bairro!: string;
  public localidade!: string;
  public uf!: string;
  public ibge!: string;
  public gia!: string;
  public ddd!: string;
  public siafi!: string;

  static initialize(sequelize: Sequelize) {
    return this.init({
      cep: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      complemento: DataTypes.STRING,
      bairro: DataTypes.STRING,
      localidade: DataTypes.STRING,
      uf: DataTypes.STRING,
      ibge: DataTypes.STRING,
      gia: DataTypes.STRING,
      ddd: DataTypes.STRING,
      siafi: DataTypes.STRING,
    }, {
      sequelize,
    });
  }
}

export default Address;
