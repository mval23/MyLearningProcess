module com.equiposfutbol.equiposfutbol {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.equiposfutbol.equiposfutbol to javafx.fxml;
    exports com.equiposfutbol.equiposfutbol;
}