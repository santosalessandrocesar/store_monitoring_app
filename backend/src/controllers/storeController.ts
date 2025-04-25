import { Request, Response } from 'express';
import fs from 'fs';
import csvParser from 'csv-parser';

// Interface para estender o Request do Express
interface MulterRequest extends Request {
    file?: {
        path: string;
    };
}

// Classe de serviço (você pode manter essa no mesmo arquivo ou importar de outro)
class StoreService {
    // Simulação de método para salvar as lojas
    public async saveStores(stores: Array<{ name: string; url: string }>): Promise<void> {
        console.log('Saving stores:', stores);
        // Aqui você implementaria a lógica real de banco de dados
    }

    public async fetchStores(): Promise<any[]> {
        // Simula retorno
        return [{ name: "Loja A", url: "https://loja-a.com" }];
    }

    public async updateStoreStatus(storeId: string, status: boolean): Promise<string> {
        // Simula atualização
        return `Status da loja ${storeId} atualizado para ${status}`;
    }
}

class StoreController {
    private storeService: StoreService;

    constructor(storeService: StoreService) {
        this.storeService = storeService;
    }

    public async getStores(req: Request, res: Response): Promise<void> {
        try {
            const stores = await this.storeService.fetchStores();
            res.status(200).json(stores);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching stores', error });
        }
    }

    public async checkStoreStatus(req: Request, res: Response): Promise<void> {
        const storeId = req.params.id;
        try {
            const status = await this.storeService.updateStoreStatus(storeId, true);
            res.status(200).json({ storeId, status });
        } catch (error) {
            res.status(500).json({ message: 'Error checking store status', error });
        }
    }

    public async uploadCSV(req: MulterRequest, res: Response): Promise<void> {
        if (!req.file) {
            res.status(400).json({ message: 'No file uploaded' });
            return;
        }

        const filePath = req.file.path;
        const stores: Array<{ name: string; url: string }> = [];

        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (row) => {
                if (row.name && row.url) {
                    stores.push({ name: row.name, url: row.url });
                } else {
                    console.warn('Invalid row in CSV:', row);
                }
            })
            .on('end', async () => {
                fs.unlink(filePath, async (unlinkErr) => {
                    if (unlinkErr) {
                        console.error('Error deleting file:', unlinkErr);
                    }

                    try {
                        await this.storeService.saveStores(stores);
                        res.status(200).json({ message: 'File processed successfully', stores });
                    } catch (error) {
                        res.status(500).json({ message: 'Error saving stores', error });
                    }
                });
            })
            .on('error', (error) => {
                console.error('Error processing CSV file:', error);
                res.status(500).json({ message: 'Error processing file', error });
            });
    }
}

export default StoreController;
