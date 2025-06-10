package com.techeazy.Controller;

import com.techeazy.entity.Parcel;
import com.techeazy.service.ParcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/parcels")
public class ParcelController {

    private final ParcelService parcelService;

    @Autowired
    public ParcelController(ParcelService parcelService) {
        this.parcelService = parcelService;
    }

    @GetMapping
    public List<Parcel> getAllParcels() {
        return parcelService.getAll();
    }

    @GetMapping("/{trackingNumber}")
    public Parcel getParcel(@PathVariable String trackingNumber) {
        return parcelService.get(trackingNumber);
    }

    @PostMapping
    public void createParcel(@RequestBody Parcel parcel) {
        parcelService.create(parcel);
    }

    @PutMapping("/{trackingNumber}")
    public void updateParcel(@PathVariable String trackingNumber, @RequestBody Parcel parcel) {
        parcelService.update(trackingNumber, parcel);
    }

    @DeleteMapping("/{trackingNumber}")
    public void deleteParcel(@PathVariable String trackingNumber) {
        parcelService.delete(trackingNumber);
    }
}
